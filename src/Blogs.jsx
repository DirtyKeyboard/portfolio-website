import React from 'react'
import NavBar from './NavBar'
import {Divider} from 'semantic-ui-react'
import {motion} from 'framer-motion'
import ImgMediaCard from './ImgMediaCard'

const Blogs = () => {
  return (
    <>
    <NavBar />
    <motion.div className='absCtr'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opcaity: 0}}
    >
      <Divider inverted horizontal style={{paddingLeft: '6vw', paddingRight: '6vw'}}>
        <h1 className='header' style={{fontSize: '10vh'}}>BLOGS</h1>
      </Divider>
      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', width: '80vw'}}>
          <ImgMediaCard title="Sending GET & POST requests with Fetch API in JavaScript"
                        preview="Fetch, like many other tools we've been gifted, 
                        is a very powerful and unique tool that allows us to begin our journey into asynchronous programming."
                        link="https://medium.com/@andrewh829/sending-get-post-requests-with-fetch-api-in-javascript-130f75cd1724"
                        image="https://cdn-media-1.freecodecamp.org/images/1*gqHgCNubMncv7EwWNdArGQ.png"/>

          <ImgMediaCard title="The Importance of Code Tracing — Solving Runtime Errors"
                        preview="I’m sure we’ve all been there as programmers, we throw 100 lines of code at our IDE, run our program, and… we run into the inevitable runtime error, whether it be our timer dropping to negative numbers, buttons that break the entire page, forgetting to catch an edge case, the list is endless."
                        link="https://medium.com/@andrewh829/the-importance-of-code-tracing-solving-runtime-errors-b6377367b6b7"
                        image="https://media.badgr.com/uploads/badges/268f2b60-4d93-434c-99ce-915656b062ca.png"/>

          <ImgMediaCard title="The Basics of GitHub / Collaborating"
                        preview="GitHub is one of the most important things for a coder to understand how to utilize. 9 times out of 10, it’s where all of our hard work will live when we are on the job, and it is also a very powerful tool to use when collaborating with other programmers."
                        link="https://medium.com/@andrewh829/the-basics-of-github-collaborating-1c18b8dd037c"
                        image="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png"/>
          <ImgMediaCard title="Tips for your Portfolio Website"
                        preview="As someone who is just stepping into the job market, one of the most important things we can have to present ourselves as software engineers is a project portfolio. More specifically, a website that has your portfolio in it. This can be a daunting task as there is a lot of different ways you can approach it, aside from the technical challenges, you will also have to be mindful to make sure your content stays meaningful and concise, so you don’t put recruiters to sleep."
                        link="https://medium.com/@andrewh829/tips-for-your-portfolio-website-938e4ddd1691"
                        image="https://www.creativefabrica.com/wp-content/uploads/2021/06/13/CV-or-Resume-Icon-Graphics-13336606-1-580x376.jpg"/>

          <ImgMediaCard title="The basics of Tailwind CSS"
                        preview="Tailwind CSS is a very powerful tool, that allows us to tweak our application styles to greater detail than possible with a pre styled component library."
                        link="https://medium.com/@andrewh829/the-basics-of-tailwind-css-c6680ba3ae76"
                        image="https://miro.medium.com/v2/resize:fit:720/format:webp/0*ffhZjzuyV6LiEmk1.png"/>

        </div>
    </motion.div>
    </>
  )
}

export default Blogs