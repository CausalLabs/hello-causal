"use client";
import { useState } from "react";
import { Products } from "./product/data";
import { queryBuilder } from "./utils/causal";

import { useFeature } from "./utils/causal.client";

import { classNames, deterministicShuffle } from "./utils/utils";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    quote:
      "My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!",
    attribution: "Sarah Peters, New Orleans",
  },
  {
    id: 2,
    quote:
      "I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!",
    attribution: "Kelly McPherson, Chicago",
  },
  {
    id: 3,
    quote:
      "Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.",
    attribution: "Chris Paul, Phoenix",
  },
];

export default function Home({ seed }: { seed: string }) {
  const hero = useFeature(queryBuilder().getStore_Hero());
  const homePageOffers = useFeature(queryBuilder().getStore_HomePageOffers());
  const trendingProductCarousel = useFeature(
    queryBuilder().getStore_TrendingProductCarousel()
  );
  const promoBanner = useFeature(queryBuilder().getStore_PromoBanner());

  const [trendingProducts] = useState(() => {
    const trendingProductCount = 4;
    const trendingProducts = deterministicShuffle(Products, seed).slice(
      0,
      trendingProductCount
    );
    return trendingProducts;
  });

  return (
    <div className="bg-white">
      <main>
        {/* Hero */}
        <div className="flex flex-col border-b border-gray-200 lg:border-0">
          {homePageOffers && homePageOffers != "OFF" && (
            <nav aria-label="Offers" className="order-last lg:order-first">
              <div className="mx-auto max-w-7xl lg:px-8">
                <ul
                  role="list"
                  className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
                >
                  {homePageOffers.offerArray?.map((offer) => (
                    <li key={offer.title} className="flex flex-col">
                      <Link
                        href={offer.href ? offer.href : "#"}
                        className="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
                      >
                        <p className="text-sm text-gray-500">{offer.title}</p>
                        <p className="font-semibold text-gray-900">
                          {offer.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          )}
          {hero && hero != "OFF" && (
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
              />
              <div className="relative bg-gray-100 lg:bg-transparent">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                  <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                    <div className="lg:pr-16">
                      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                        {hero.headline}
                      </h1>
                      <p className="mt-4 text-xl text-gray-600">
                        {hero.subheadline}
                      </p>
                      <div className="mt-6">
                        <a
                          href="/store/product"
                          onClick={hero.signalheroClicked}
                          className={classNames(
                            "inline-block rounded-md border border-transparent px-8 py-3 font-medium",
                            hero.buttonColor,
                            hero.buttonFontColor
                          )}
                        >
                          {hero.buttonCTA}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          )}
        </div>

        {/* Trending products */}
        {trendingProductCarousel && trendingProductCarousel != "OFF" && (
          <section aria-labelledby="trending-heading" className="bg-white">
            <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-32">
              <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
                <h2
                  id="trending-heading"
                  className="text-2xl font-bold tracking-tight text-gray-900"
                >
                  {trendingProductCarousel.headline}
                </h2>
                <a
                  href="/store/products"
                  className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
                >
                  See everything
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>

              <div className="relative mt-8">
                <div className="relative w-full overflow-x-auto">
                  <ul
                    role="list"
                    className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
                  >
                    {trendingProducts.map((product) => (
                      <li
                        key={product.id}
                        className="inline-flex w-64 flex-col text-center lg:w-auto"
                      >
                        <div className="group relative">
                          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                            <img
                              src={product.imageSrc}
                              alt={product.productDescription}
                              className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                          </div>
                          <div className="mt-6">
                            <p className="text-sm text-gray-500">
                              {product.color}
                            </p>
                            <h3 className="mt-1 font-semibold text-gray-900">
                              <a
                                href={product.href}
                                onClick={() => {
                                  trendingProductCarousel.signalProductClicked({
                                    productId: product.id,
                                  });
                                }}
                              >
                                <span className="absolute inset-0" />
                                {product.name}
                              </a>
                            </h3>
                            <p className="mt-1 text-gray-900">
                              {product.price.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                              })}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 px-4 sm:hidden">
                <a
                  href="#"
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  See everything
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Sale and testimonials */}
        <div className="relative overflow-hidden">
          {/* Decorative background image and gradient */}
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-white bg-opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
          </div>

          {/* Sale */}
          {promoBanner && promoBanner != "OFF" && (
            <section
              aria-labelledby="sale-heading"
              className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
            >
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <h2
                  id="sale-heading"
                  className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
                >
                  {promoBanner.headline}
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
                  {promoBanner.subheadline}
                </p>
                <Link
                  href="/store/sale"
                  onClick={promoBanner.signalPromoBannerClicked}
                  className={classNames(
                    "mt-6 inline-block w-full rounded-md border border-transparent px-8 py-3 font-medium  sm:w-auto",
                    promoBanner.buttonColor ? promoBanner.buttonColor : "",
                    promoBanner.buttonTextColor
                      ? promoBanner.buttonTextColor
                      : ""
                  )}
                >
                  {promoBanner.buttonCTA}
                </Link>
              </div>
            </section>
          )}

          {/* Testimonials */}
          <section
            aria-labelledby="testimonial-heading"
            className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
          >
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2
                id="testimonial-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                What are people saying?
              </h2>

              <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                {testimonials.map((testimonial) => (
                  <blockquote key={testimonial.id} className="sm:flex lg:block">
                    <svg
                      width={24}
                      height={18}
                      viewBox="0 0 24 18"
                      aria-hidden="true"
                      className="flex-shrink-0 text-gray-300"
                    >
                      <path
                        d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                      <p className="text-lg text-gray-600">
                        {testimonial.quote}
                      </p>
                      <cite className="mt-4 block font-semibold not-italic text-gray-900">
                        {testimonial.attribution}
                      </cite>
                    </div>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
