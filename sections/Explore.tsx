"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExploreCard, TitleText, TypingText } from "@/components"
import { staggerContainer } from "../utils/motions"
import { exploreWorlds } from "@/constants"
import styles from "../styles"

const About = () => {
  const [active, setActive] = useState("world-2")

  return (
    <section className={`${styles.paddings}`} id='explore'>
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='| The World' textStyles='text-center' />
        <TitleText
          title={
            <>
              Choose the world you want
              <br className='md:block hidden' />
              to explore
            </>
          }
          textStyles='text-center'
        />
        <div className='mt-[10px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About
