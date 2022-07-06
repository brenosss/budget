import Image from "next/image"
import { Routes } from "blitz"

import { ButtonLink } from "app/core/components/Buttons"
import Container from "app/core/components/Container"
import logoLaravel from "public/images/logos/laravel.svg"
import logoMirage from "public/images/logos/mirage.svg"
import logoStatamic from "public/images/logos/statamic.svg"
import logoStaticKit from "public/images/logos/statickit.svg"
import logoTransistor from "public/images/logos/transistor.svg"
import logoTuple from "public/images/logos/tuple.svg"

function Companies() {
  return (
    <div className="mt-36 lg:mt-44">
      <p className="font-display text-base text-slate-900">Trusted by these six companies so far</p>
      <ul className="mt-8 flex items-center justify-center space-x-8 sm:flex-col sm:space-x-0 sm:space-y-10 xl:flex-row xl:space-y-0 xl:space-x-12">
        <li>
          <ul className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12">
            <li className="flex">
              <Image src={logoTransistor} alt="Transistor" layout="fixed" unoptimized />
            </li>
            <li className="flex">
              <Image src={logoTuple} alt="Tuple" layout="fixed" unoptimized />
            </li>
            <li className="flex">
              <Image src={logoStaticKit} alt="StaticKit" layout="fixed" unoptimized />
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12">
            <li className="flex">
              <Image src={logoMirage} alt="Mirage" layout="fixed" unoptimized />
            </li>
            <li className="flex">
              <Image src={logoLaravel} alt="Laravel" layout="fixed" unoptimized />
            </li>
            <li className="flex">
              <Image src={logoStatamic} alt="Statamic" layout="fixed" unoptimized />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32 md:mb-40">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Personal accounting{" "}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">made simple</span>
        </span>{" "}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Most financial software is accurate, but hard to use. We make the opposite trade-off, and I
        hope you finally organize your financial life.
      </p>
      <div className="mt-10 flex justify-center space-x-6">
        <ButtonLink href={Routes.SignupPage()}>Get for free</ButtonLink>
      </div>
    </Container>
  )
}
