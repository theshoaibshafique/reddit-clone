import React from 'react';
import Image from 'next/image';
import {
  Bars4Icon,
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';
import {
  BellIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAsiaAustraliaIcon,
  MegaphoneIcon,
  PlusIcon,
  SparklesIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';
import { signIn, signOut, useSession } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-50 flex bg-black px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image objectFit="contain" src="/reddit-logo-dark.png" layout="fill" />
      </div>
      <div className="mx-7 flex items-center xl:min-w-[300px] ">
        <HomeIcon className="h-5 w-5 cursor-pointer" />
        <p className="flex-1 ml-2 hidden  lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5 cursor-pointer" />
      </div>

      {/* Search box */}

      <form className="flex flex-1 items-center space-x-2 border border-gray-800 rounded-sm bg-gray-900">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-600 " />
        <input
          type="text"
          placeholder="Search Reddit"
          className="bg-transparent flex-1 outline-none"
        />
        <button type="submit" hidden />
      </form>

      <div className="items-center text-gray-600 space-x-2 hidden lg:inline-flex mx-5">
        <SparklesIcon className="icon" />
        <GlobeAsiaAustraliaIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-800" />
        <ChatBubbleBottomCenterTextIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MegaphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center text-gray-600 lg:hidden">
        <Bars4Icon className="icon" />
      </div>

      {/* Sign0in/Signout */}

      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items-center space-x-2 border border-gray-900 cursor-pointer"
        >
          <img
            src="https://miro.medium.com/max/700/1*SPekq4E_Y29y9EvRU0bGiw.png"
            className="h-8 w-8 object-cover flex-shrink-0"
            alt=""
          />
          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">Sign Out</p>
          </div>

          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-500" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center space-x-2 border border-gray-900 cursor-pointer"
        >
          <img
            src="https://miro.medium.com/max/700/1*SPekq4E_Y29y9EvRU0bGiw.png"
            className="h-8 w-8 object-cover flex-shrink-0"
            alt=""
          />
          <p className="text-gray-400">Sign in</p>
        </div>
      )}
    </div>
  );
};

export default Header;
