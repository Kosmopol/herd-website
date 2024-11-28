<script setup lang="ts">
import SectionWrapper from '~/components/herd/section/SectionWrapper.vue';
import HerdAdvisoryBoardMember from '~/components/herd/section/advisory-board/HerdAdvisoryBoardMember.vue'
import CanvasLayout from '@/components/herd/section/CanvasLayout.vue';
</script>

<template>
    <SectionWrapper id="advisory-board">
        <CanvasLayout :is-gold="false">
            <h2 class="h2-advisory-board">Advisory board</h2>
            <ul class="ul-advisory-board">
                <HerdAdvisoryBoardMember role="IOG, CTO" name="Romain Pellerin"
                    citation="providing invaluable expertise in blockchain and gaming. He will assist the team in building a sound technical architecture and gaming experience.">
                </HerdAdvisoryBoardMember>
                <HerdAdvisoryBoardMember role="Paima Studio, CEO" name="Sebastian Guillemot"
                    citation="blockchain and gaming expertise. He will assist the team in the integration of the Paima Engine to Herd.">
                </HerdAdvisoryBoardMember>
                <HerdAdvisoryBoardMember role="NMKR, CEO" name="Patrick Tobler"
                    citation="NFT marketplace expertise. He will assist the team in building the official NFT marketplace for Herd on Midnight.">
                </HerdAdvisoryBoardMember>
                <HerdAdvisoryBoardMember role="marketing expertise" name="HOSKY"
                    citation="He will help the team in marketing Herd properly on social networks (Twitter, Discord, Twitch) and building a strong brand.">
                </HerdAdvisoryBoardMember>
                <HerdAdvisoryBoardMember role="management expertise" name="NEWM"
                    citation="music industry distribution and artist royalties.">
                </HerdAdvisoryBoardMember>
                <HerdAdvisoryBoardMember role="Rulemakers DAO, Founder, Lawyer" name="Kotaro Motoshima"
                    citation="expertise in incorporation of DAO in Japan.">
                </HerdAdvisoryBoardMember>
            </ul>
        </CanvasLayout>
    </SectionWrapper>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.h2-advisory-board {
    color: var(--title-color-2);
    font-size: 1.3rem;
}

.ul-advisory-board {
    display: flex;
    flex-direction: column;
    list-style: none;
    font-size: 1.2rem;
    gap: 1rem;
    padding: 0;
}

@media (min-width: $breakpoint-m) {
    .h2-advisory-board {
        font-size: 1.5rem;
    }

    .ul-advisory-board {
        font-size: 1.35rem;
    }
}


@media (min-width: $breakpoint-l) {
    .h2-advisory-board {
        font-size: 1.5rem;
    }

    .ul-advisory-board {
        padding: inherit;
        font-size: 1.4rem;
    }
}
</style>