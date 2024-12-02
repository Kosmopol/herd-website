<script setup lang="ts">
import SectionWrapper from '~/components/herd/section/SectionWrapper.vue';
import HerdTeamMember from '~/components/herd/section/team/HerdTeamMember.vue'
import CanvasLayout from '@/components/herd/section/CanvasLayout.vue';

const teamMembers = [
    { role: "Game Director", name: "Pierre Aceituno" },
    { role: "Communication and Partnerships", name: "Karim Sellami" },
    { role: "Art Direction", name: "Elsa Nedelec" },
    { role: "Technical Art", name: "Riwal Pacquentin" },
    { role: "Animator", name: "Laura Martin-Wortham" },
    { role: "2D Artist", name: "Lola Torres" },
    { role: "Sound Designer/Composer", name: "Henri Clerc" },
    { role: "Sound Designer Technical", name: "Martin Rabiller" },
    { role: "Game Design", name: "Dorian Souc" },
    { role: "Programming", name: "Pierre Hennecart" }
];
</script>

<template>
    <SectionWrapper id="team">
        <CanvasLayout :is-gold="true">
            <h2 class="h2-team">Our Team</h2>
            <div class="team-content">
                <HerdTeamMember v-for="member in teamMembers" :key="member.name" :role="member.role"
                    :name="member.name">
                </HerdTeamMember>
            </div>
        </CanvasLayout>
    </SectionWrapper>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";


.h2-team {
    color: var(--title-color-1);
    font-size: 1.6rem;
}

.team-content {
    display: grid;
    /* Change to grid layout */
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    /* Space between grid items */
    padding: 0;
    max-height: 100%;
}

@media (min-width: $breakpoint-m) {
    .h2-team {
        color: var(--title-color-1);
        font-size: 1.7rem;
    }

    .team-content {
        font-size: 1.35rem;

    }
}


@media (min-width: $breakpoint-l) {
    .h2-team {
        color: var(--title-color-1);
        font-size: 1.8rem;
    }

    .team-content {
        grid-template-columns: repeat(2, 1fr);
        padding: inherit;
        font-size: 1.4rem;
    }
}
</style>