"use client";
import { queryBuilder } from "./utils/causal";
import { useFeature } from "./utils/causal.client";
import { classNames } from "./utils/utils";
import { useState } from "react";

const footerNavigation = {
  customerService: [
    { name: "Contact", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "Secure Payments", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Find a store", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  legal: [
    { name: "Terms of Service", href: "#" },
    { name: "Return Policy", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Shipping Policy", href: "#" },
  ],
  bottomLinks: [
    { name: "Accessibility", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

export function Footer() {
  const penQuizPromoCard = useFeature(
    queryBuilder().getStore_PenQuizPromoCard()
  );
  const newsletterSignup = useFeature(
    queryBuilder().getStore_NewsletterSignup()
  );
  const [didNewsletterSignup, setDidNewsletterSignup] = useState(false);

  function handleNewsletterSignup() {
    if (newsletterSignup == "OFF") return;
    setDidNewsletterSignup(true);
    newsletterSignup?.signalNewsletterSignupClicked();
  }

  return (
    <footer aria-labelledby="footer-heading" className="bg-white">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200">
          <div className="pb-20 pt-16">
            <div className="md:flex md:justify-center">
              <img
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
                className="h-8 w-auto"
              />
            </div>
            <div className="mx-auto mt-16 max-w-5xl xl:grid xl:grid-cols-2 xl:gap-8">
              <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Customer Service
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.customerService.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Company
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Legal</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.legal.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
            {newsletterSignup && newsletterSignup != "OFF" && (
              <div className="flex items-center rounded-lg bg-gray-100 p-6 sm:p-10">
                <div className="mx-auto max-w-sm">
                  <h3 className="font-semibold text-gray-900">
                    {newsletterSignup.headline}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {newsletterSignup.subheadline}
                  </p>
                  {!didNewsletterSignup ? (
                    <div className="mt-4 sm:mt-6 sm:flex">
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        type="text"
                        autoComplete="email"
                        required
                        className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      />

                      <div className="mt-3 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                        <button
                          type="submit"
                          onClick={handleNewsletterSignup}
                          className={classNames(
                            "flex w-full items-center justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium  shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white",
                            newsletterSignup.buttonColor
                              ? newsletterSignup.buttonColor
                              : "",
                            newsletterSignup.buttonTextColor
                              ? newsletterSignup.buttonTextColor
                              : ""
                          )}
                        >
                          {newsletterSignup.buttonCTA}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-3 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                      <p className="mt-2 text-sm text-gray-500">
                        Thanks for signing up
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {penQuizPromoCard && penQuizPromoCard != "OFF" && (
              <div className="relative mt-6 flex items-center px-6 py-12 sm:px-10 sm:py-16 lg:mt-0">
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/footer-02-exclusive-sale.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center saturate-0 filter"
                  />
                  <div className="absolute inset-0 bg-indigo-600 bg-opacity-90" />
                </div>
                <div className="relative mx-auto max-w-sm text-center">
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {penQuizPromoCard.headline}
                  </h3>
                  <p className="mt-2 text-gray-200">
                    {penQuizPromoCard?.subheadline}
                    <a
                      href="/store/quiz"
                      onClick={penQuizPromoCard.signalquizPromoClicked}
                      className="whitespace-nowrap font-bold text-white hover:text-gray-200"
                    >
                      {penQuizPromoCard?.buttonCTA}
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="py-10 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              &copy; 2023 All Rights Reserved
            </p>
          </div>

          <div className="mt-4 flex items-center justify-center md:mt-0">
            <div className="flex space-x-8">
              {footerNavigation.bottomLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-500 hover:text-gray-600"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
