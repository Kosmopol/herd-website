<script setup lang="ts">
import SectionWrapper from '~/components/herd/section/SectionWrapper.vue';
import HerdAdvisoryBoardMember from '~/components/herd/section/advisory-board/HerdAdvisoryBoardMember.vue'
import CarouselLayout from '@/components/herd/section/CarouselLayout.vue';

const advisoryMembers = [
    { role: "IOG, CTO", name: "Romain Pellerin", citation: "providing invaluable expertise in blockchain and gaming. He will assist the team in building a sound technical architecture and gaming experience." },
    { role: "Paima Studio, CEO", name: "Sebastien Guillemot", citation: "blockchain and gaming expertise. He will assist the team in the integration of the Paima Engine to Herd." },
    { role: "NMKR, CEO", name: "Patrick Tobler", citation: "NFT marketplace expertise. He will assist the team in building the official NFT marketplace for Herd on Midnight." },
    { role: "", name: "HOSKY", citation: "He will help the team in marketing Herd properly on social networks (Twitter, Discord, Twitch) and building a strong brand." },
    { role: "", name: "NEWM", citation: "music industry distribution and artist royalties." },
    { role: "Rulemakers DAO, Founder, Lawyer", name: "Kotaro Motoshima", citation: "expertise in incorporation of DAO in Japan." }
];
</script>

<template>
    <SectionWrapper id="advisory-board">
        <h2 class="h2-advisory-board">Advisory board</h2>
        <CarouselLayout autoPlay :interval="5000" showControls showDots>
            <template v-for="(member,index) in advisoryMembers" :key="index"  #[`slide-${index}`]="">
                    <HerdAdvisoryBoardMember :key="member.name" :role="member.role" :name="member.name"
                        :citation="member.citation">
                    </HerdAdvisoryBoardMember>
            </template>
        </CarouselLayout>
    </SectionWrapper>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.h2-advisory-board {
    color: var(--title-color-2);
    font-size: 1.6rem;
}

@media (min-width: $breakpoint-m) {
    .h2-advisory-board {
        font-size: 1.7rem;
    }

}


@media (min-width: $breakpoint-l) {
    .h2-advisory-board {
        font-size: 1.8rem;
    }

}
</style>