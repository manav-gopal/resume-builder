import { motion, useAnimation } from 'framer-motion';

import { Button } from '@mui/material';
import FeatureSection from './components/Feature';
import Image from 'next/image';
import Link from 'next/link';
import Person from './components/Person';
import NavHome from '../NavHome';

const HomeLayout = () => {
  const controls = useAnimation();
  const animationEffectsHoverEnter = { scale: 1.05 };
  const animationEffectsHoverLeave = { scale: 1 };
  const animationEffectsFirstLoad = {
    scale: [0.9, 1],
    opacity: [0, 1],
  };
  const transtionEffects = {
    type: 'spring',
    stiffness: 400,
    damping: 17,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1] }}
      className="scroll-smooth"
      style={{
        // background: 'linear-gradient(180deg, #E7EEFA 50%, #FFFFFF 100%)', // Light background
        fontFamily: "'Roboto Slab', serif",
        position: 'absolute',
      }}
    >
      <NavHome />
      <div>
        <div className="mx-6 md:mx-40 xl:mx-60 mb-6">
          <motion.div
            className="grid grid-cols-12 pt-12 md:pt-24"
            initial={{ opacity: 0 }}
            animate={animationEffectsFirstLoad}
            transition={transtionEffects}
          >
            <div className="col-span-12 sm:col-span-4">
              <motion.img
                id="resume-3d"
                src="/resume.webp"
                alt="resume-3d"
                className="w-6/12 sm:w-9/12"
                onMouseEnter={() => {
                  controls.start(animationEffectsHoverEnter, transtionEffects);
                }}
                onMouseLeave={() => {
                  controls.start(animationEffectsHoverLeave, transtionEffects);
                }}
                animate={controls}
              />
            </div>
            <div className="col-span-12 sm:col-span-8">
              <h3 className="text-xl md:text-2xl mb-2 text-resume-400">SIMPLEST WAY TO BUILD A</h3>
              <h1 className="text-5xl mb-12 text-resume-800">Professional Resume</h1>

              <div className="flex mb-10">
                <div className="bg-resume-800 w-1 rounded-lg"></div>
                <p className="text-lg ml-3 text-resume-800">
                  &ldquo;The secret to getting ahead is getting started&rdquo;
                  <br />
                  —Mark Twain
                </p>
              </div>
              <Link href="/builder" passHref={true}>
                <Button variant="contained" className="bg-resume-700 mb-2 hover:scale-105">
                  BUILD YOUR RESUME
                </Button>
              </Link>
              <p
                className="xl:invisible text-resume-800"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                Desktop screen recommended
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mx-6 md:mx-40 xl:mx-60 my-32 w-75"
        style={{ fontFamily: "'Roboto Slab', serif" }}
        initial={{ opacity: 0 }}
        animate={animationEffectsFirstLoad}
        transition={transtionEffects}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeatureSection />
        </div>
      </motion.div>

      {/* <div className="my-32">
        <div
          id="contribute"
          className="mx-6 md:mx-40 xl:mx-60 py-12"
          style={{ fontFamily: "'Roboto Slab', serif" }}
        >
          <div className="grid grid-cols-12 items-center text-center">
            <div className="col-span-12 lg:col-span-4 mb-4 lg:mb-0 flex flex-col items-center gap-2">
              <Image src={'/icons/palette.svg'} alt="logo" height="48" width="48" />
              <p className="text-resume-800 text-xl mt-2">
                Do you want to make your own <strong>template?</strong>
              </p>
            </div>
            <div className="col-span-12 lg:col-span-1 mb-4 lg:mb-0 text-resume-800 text-4xl">
              <p>+</p>
            </div>
            <div className="col-span-12 lg:col-span-2 flex flex-col items-center gap-2">
              <Image src={'/icons/terminal.svg'} alt="logo" height="48" width="48" />
              <p className="text-resume-800 text-xl mt-2">
                Do you write <strong>React</strong> code?
              </p>
            </div>
            <div className="invisible lg:visible lg:col-span-2 text-resume-800 text-4xl mx-6">
              <p>=</p>
            </div>
            <div className="col-span-12 lg:col-span-3 mx-auto flex flex-col items-center gap-2">
              <div className="mb-6">
                <Image src={'/icons/wave.svg'} alt="logo" height="48" width="48" />
              </div>
              <div>
                <a
                  href="https://github.com/sadanandpai/resume-builder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="contained" className="bg-resume-600 mt-2 lg:mt-5 mb-3">
                    CONTRIBUTE
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div
        id="about-us"
        className="mx-6 md:mx-40 xl:mx-60 my-32"
        style={{ fontFamily: "'Roboto Slab', serif" }}
      >
        <h2 className="text-resume-800 text-3xl mb-2 text-center lg:text-left">About us</h2>
        <p className="text-resume-400 mb-8 text-center lg:text-left">
          A gorup of developers and designers — who love to build projects and learn along!
        </p>
        <p className="text-resume-200 mb-8 text-center lg:text-left">
          Manav Gopal | Harsh Sahu | Parasnath Sannat
        </p>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Person />
        </div> */}
        {/* <p className="text-resume-400 my-8 text-center lg:text-left">
          Read our design story on&nbsp;
          <a
            href="https://medium.com/@yakshag/e-resume-build-a-professional-resume-design-case-study-3dc02a6359ea"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Medium
          </a>
          ↗
        </p> */}
      </div>
    </motion.div>
  );
};

export default HomeLayout;
