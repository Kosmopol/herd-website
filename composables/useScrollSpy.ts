import { ref, onMounted, onUnmounted, Ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { debounce } from "~/utils/debounce";

interface ScrollSpyOptions {
    threshold?: number;
}


export function useScrollSpy(options: ScrollSpyOptions = { threshold: 0.5 }): { activeSection: Ref<string> } {
    const isScrolling = ref(false)
    const activeSection = ref<string>(""); // Reactive reference for the active section
    const router = useRouter();
    const route = useRoute();
    const lastIntersectionId = ref("");

    let observer: IntersectionObserver | null = null; // Store the IntersectionObserver instance

    const updateHash = (sectionId: string): void => {
        if (route.hash !== `#${sectionId}`) {
            router.push({ hash: `#${sectionId}` }).catch(() => {
                // Ignore navigation errors (e.g., if already on the same hash)
            });
        }
    };

    //TOFIX: scroll issue when the page have too much height
    const setHashId = (id: string) => {
        //activeSection.value = id;
        //updateHash(id);
    }

    const initializeObserver = (): void => {
        const sections = document.querySelectorAll<HTMLElement>("section");
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        //console.log("intersectId",entry.target.id)
                        let id = entry.target.id
                        if(!id){
                            id="home";
                        }
                        if (isScrolling.value) {
                            lastIntersectionId.value = id
                            return
                        }
                        setHashId(id)
                    }
                });
            },
            { threshold: options.threshold }
        );

        sections.forEach((section) => observer?.observe(section));
    };

    const handleScroll = () => {
        isScrolling.value = true
        //console.log("scrollStart")
        debounceScrollEnd()
    }

    const scrollEnd = () => {
        isScrolling.value = false
        //console.log("scrollEnd")
        if (activeSection.value != lastIntersectionId.value) {
            setHashId(lastIntersectionId.value)
        }
    }

    const debounceScrollEnd = debounce(function () {
        scrollEnd()
    }, 120)

    onMounted(() => {
        if (process.client) {
            window.addEventListener('scroll', handleScroll);
        }
        initializeObserver();
    });

    onUnmounted(() => {
        if (process.client) {
            window.removeEventListener('scroll', handleScroll);
        }
        if (observer) {
            observer.disconnect();
        }
    });

    return {
        activeSection,
    };
}
