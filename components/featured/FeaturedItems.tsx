// Import Swiper React components
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react'
import React, { useRef, useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MemberCard from '../member-card/MemberCard'
import { Members as MembersType } from '../Members.types'

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

import axios from 'axios'

// import required modules
import SwiperCore, { Navigation } from 'swiper'

SwiperCore.use([Navigation])

const FeaturedItems = () => {
  const [posts, setPosts] = useState<MembersType>({
    items: [],
    totalResults: 0,
    resultContext: '',
    skip: 0,
    take: 0,
    links: [],
  })
  const [currentIndex, setCurrentIndex] = useState(1)
  const [firstLand, setFirstLand] = useState(0)

  const fetchPosts = async (skip = 0, take = 20) => {
    const res = await axios.get(
      `https://members-api.parliament.uk/api/Members/Search?PartyId=4&House=1&IsEligible=true&IsCurrentMember=true&skip=${skip}&take=${take}`
    )
    setPosts(res.data)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getCurretnIndex = async (e: any) => {
    const i = await e.realIndex
    setCurrentIndex(i)
  }

  const prevButtonClick = async () => {
    console.log('prevButtonClick', currentIndex)
    if (currentIndex == 0 && posts.skip == 0) {
      fetchPosts(posts.totalResults - posts.take, posts.take)
    } else if (currentIndex == 0) {
      fetchPosts(posts.skip - posts.take, posts.take)
    }
  }

  const nextButtonClick = async () => {
    // check first time click

    console.log('nextButtonClick', currentIndex)
    if (posts.skip == posts.totalResults - posts.take) {
      fetchPosts(0, posts.take)
    }
    if (currentIndex == 0 && firstLand !== 0) {
      fetchPosts(posts.skip + posts.take, posts.take)
    }
    setFirstLand(1)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }} data-testid="featured">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            textAlign: 'left',
            fontSize: 12,
            mb: 2,
            textTransform: 'uppercase',
          }}
        >
          Featured Items
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
          <Box ref={prevRef} className="previous" onClick={prevButtonClick}>
            <ArrowLeftIcon />
          </Box>
          <Box ref={nextRef} className="next" onClick={nextButtonClick}>
            <ArrowRightIcon />
          </Box>
        </Box>
      </Box>

      <SwiperReact
        onSlideChange={getCurretnIndex}
        data-testid="featured-items"
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        className="mySwiper"
        navigation={{
          prevEl: prevRef.current ? prevRef.current : undefined,
          nextEl: nextRef.current ? nextRef.current : undefined,
        }}
        onInit={(swiper) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.prevEl = prevRef.current
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.update()
        }}
      >
        {posts.items.map((post, index) => (
          <SwiperSlide key={index} className="featured-item">
            <MemberCard
              name={post.value.nameDisplayAs}
              party={post.value.latestParty.name}
              image={post.value.thumbnailUrl}
              bio={post.value.latestHouseMembership.membershipFrom}
            />
          </SwiperSlide>
        ))}
      </SwiperReact>
    </Box>
  )
}

export default FeaturedItems
