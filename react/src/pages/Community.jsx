import {
  CommunityHero,
  FeaturedStory,
  StoriesCarousel,
  ProfileGrid,
  PhotoGrid,
  CommunityValues,
  CommunityCTA,
} from '@/features/community/sections'

export default function Community() {
  return (
    <main>
      <CommunityHero />
      <FeaturedStory />
      <StoriesCarousel />
      <ProfileGrid />
      <PhotoGrid />
      <CommunityValues />
      <CommunityCTA />
    </main>
  )
}
