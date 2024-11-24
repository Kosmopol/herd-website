<script setup lang="ts">
import SectionWrapper from '~/components/herd/section/SectionWrapper.vue';
import HerdTeamMember from '~/components/herd/section/team/HerdTeamMember.vue'
import CanvasLayout from '@/components/herd/section/CanvasLayout.vue';
</script>

<template>
    <SectionWrapper id="team">
        <CanvasLayout :is-gold="true">
            <h2 class="h2-team">Our Team</h2>
            <ul class="ul-team">
                <HerdTeamMember role="Game Designer & Director" name="Pierre Aceituno"></HerdTeamMember>
                <HerdTeamMember role="Technical Art Director" name="Riwal Pacquentin"></HerdTeamMember>
                <HerdTeamMember role="3D Artist/Animator" name="Elsa Nedelec, Laura Martin - Wortham"></HerdTeamMember>
                <HerdTeamMember role="Sound Designer" name="Henri Clerc"></HerdTeamMember>
                <HerdTeamMember role="Audio Engineer" name="Martin Rabiller"></HerdTeamMember>
            </ul>
        </CanvasLayout>
    </SectionWrapper>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.h2-team {
    color: var(--title-color-1);
    font-size: 1.3rem;
}

.ul-team {
    display: flex;
    flex-direction: column;
    list-style: none;
    font-size: 1.2rem;
    gap: 1rem;
    padding: 0;
}

@media (min-width: $breakpoint-m) {
    .h2-team {
        color: var(--title-color-1);
        font-size: 1.5rem;
    }

    .ul-team {
        font-size: 1.35rem;
    }
}


@media (min-width: $breakpoint-l) {
    .h2-team {
        color: var(--title-color-1);
        font-size: 1.5rem;
    }

    .ul-team {
        padding: inherit;
        font-size: 1.4rem;
    }
}
</style>