import React from "react";
import Image from "next/image";
import Link from "next/link";

const WelcomeScreen = () => {
  return (
    <div className="relative hidden h-full flex-col p-10 text-black lg:flex">
    <div className="relative z-20 flex flex-col mt-10 space-y-5 items-center">
      <Image
        src="/BrainBoosters.png"
        width={320}
        height={150}
        alt="BrainBoosters"
      />
      <div className="flex justify-center">
        <p className="text-2xl font-extrabold uppercase">
          Turn screen time into{" "}
          <span className="text-dopalearnblue">L</span>
          <span className="text-dopalearnred">E</span>
          <span className="text-dopalearngreen">A</span>
          <span className="text-dopalearnyellow">R</span>
          <span className="text-dopalearndarkblue">N</span>
          <span className="text-dopalearnpink">I</span>
          <span className="text-dopalearnorange">N</span>
          <span className="text-dopalearnlightblue">G</span> time.
        </p>
      </div>
      <div className="flex flex-row justify-center gap-4">
        <Link href="https://apps.apple.com/us/app/dopalearn/id1542507323">
          <div className="border border-white rounded-md">
            <Image
              src="https://assets-global.website-files.com/61a4ecbcf1407008e0dd07fb/65fb2d5607054ca1c5d89d0a_ios_button_blk.png"
              width={120}
              height={50}
              alt="dopalearn"
            />
          </div>
        </Link>

        <Link href="https://play.google.com/store/apps/details?id=com.littlebrainboosters.dopalearn">
          <div className="border border-white rounded-md">
            <Image
              src="https://assets-global.website-files.com/61a4ecbcf1407008e0dd07fb/65fb2d5646e8cd0279245917_android_button_blk.png"
              width={120}
              height={50}
              alt="dopalearn"
            />
          </div>
        </Link>
      </div>
    </div>
    <div className="relative z-20 mt-auto container">
      <blockquote className="space-y-2">
        <h2 className="font-bold text-2xl text-center ">
          A NEW WAY OF LEARNING
        </h2>
        <p className="text-center text-sm">
          <strong>Dopalearn® </strong>offers a{" "}
          <strong>new method of learning</strong> for children by blending{" "}
          <strong>learning</strong> with <strong>entertainment</strong>.
          It’s a <strong>video</strong> <strong>platform</strong> that
          uses <strong>lessons</strong> and <strong>challenges</strong> in
          place of <strong>advertisements</strong> to teach foundational
          concepts. The training is done by periodically{" "}
          <strong>interrupting</strong> the video with{" "}
          <strong>nano-lessons</strong> in the form of{" "}
          <strong>popups</strong>. A <strong>built-in library</strong>{" "}
          allows the parent to <strong>find and assign lessons</strong>{" "}
          before handing the device over to the <strong>child</strong>.
          Lessons range from <strong>ABCs</strong>,{" "}
          <strong>numbers</strong>, <strong>vocabulary building</strong>,{" "}
          <strong>first words &amp; sight words</strong>, to more advanced
          topics such as <strong>reading</strong>,{" "}
          <strong>writing</strong>, <strong>spelling</strong>, and{" "}
          <strong>math</strong>.
        </p>
      </blockquote>
    </div>
  </div>
  );
};

export default WelcomeScreen;
