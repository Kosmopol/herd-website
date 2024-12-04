<script setup lang="ts">
import SectionWrapper from '~/components/herd/section/SectionWrapper.vue';
import HerdTeamMember from '~/components/herd/section/team/HerdTeamMember.vue'
import { teamMembers } from '@/domain/data/team';
</script>

<template>
    <SectionWrapper class="team-section" id="team">
        <!-- <CanvasLayout :is-gold="true"> -->
        <h2 class="h2-team">Our Team</h2>
        <div class="team-container">
            <div class="team-content">
                <HerdTeamMember v-for="member in teamMembers" :key="member.name" :role="member.role" :name="member.name"
                    :photo="member.photo" :linkedin="member.linkedin" :website="member.website">
                </HerdTeamMember>
            </div>
        </div>
        <!-- </CanvasLayout> -->
    </SectionWrapper>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";


.team-section {
    width: 100%;
}


.h2-team {
    color: var(--title-color-1);
    font-size: 1.6rem;
}

.team-container {
    display: flex;
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

    .team-container {
        justify-content: space-evenly;
    }

    .team-content {
        grid-template-columns: repeat(2, 1fr);
        padding: 1rem;
        font-size: 1.4rem;
    }
}
</style>