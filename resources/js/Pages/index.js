import React from 'react'
import { A, H1, H2, Layout, P } from '@/Components'

const meta = {
  description:
    'Inertia.js lets you quickly build modern single-page React, Vue and Svelte apps using classic server-side routing and controllers.',
  hero: true,
  sponsor: true,
  twitterCardImage: 'https://inertiajs.com/previews/home.png',
  links: [
    { url: '#top', name: 'Introduction' },
    { url: '#not-a-framework', name: 'Not a framework' },
    { url: '#join-the-newsletter', name: 'Join the newsletter' },
  ],
}

const Page = () => {
  return (
    <>
      <H1>JavaScript apps the monolith way</H1>
      <P>Inertia is a new approach to building classic server-driven web apps. We call it the modern monolith.</P>
      <P>
        Inertia allows you to create fully client-side rendered, single-page apps, without much of the complexity that
        comes with modern SPAs. It does this by leveraging existing server-side frameworks.
      </P>
      <P>
        Inertia has no client-side routing, nor does it require an API. Simply build controllers and page views like
        you've always done!
      </P>
      <P>
        See the <A href="/who-is-it-for">who is it for</A> and <A href="/how-it-works">how it works</A> pages to learn
        more.
      </P>
      <H2>Not a framework</H2>
      <P>
        Inertia isn't a framework, nor is it a replacement to your existing server-side or client-side frameworks.
        Rather, it's designed to work with them. Think of Inertia as glue that connects the two. Inertia does this via
        adapters. We currently have three official client-side adapters (React, Vue, and Svelte) and two server-side
        adapters (Laravel and Rails).
      </P>
      <H2>Join the newsletter</H2>
      <div className="mt-8 p-8 rounded-lg text-white" style={{ background: '#303f6d' }}>
        <div className="sm:flex sm:items-center">
          <a
            className="flex-shrink-0 block w-24 h-24 rounded-full overflow-hidden mr-5"
            href="https://twitter.com/reinink"
          >
            <img className="w-full h-full" src="/img/jonathan.png" alt="Jonathan Reinink" />
          </a>
          <div>
            <div className="mt-4 sm:mt-0 md:text-lg leading-snug">
              If you're interested in following along with the development of Inertia.js, I share updates about it with
              my newsletter.
            </div>
            <div className="mt-2 text-sm text-pink-300">
              &mdash;
              <a className="hover:underline" href="https://twitter.com/reinink">
                Jonathan Reinink
              </a>
              , creator<span className="hidden md:inline"> of Inertia.js</span>
            </div>
          </div>
        </div>
        <form
          className="relative rounded md:flex-1 flex flex-wrap mt-10 bg-white js-cm-form"
          action="https://www.createsend.com/t/subscribeerror?description="
          method="post"
          data-id="5B5E7037DA78A748374AD499497E309E7A72DB5B03776F8528C3CD73C7D671DB63D56863313BA2815CD76E9BF64B0B2C16A5F149531D155024506C8CF65B0F9F"
        >
          <input type="hidden" name="cm-f-dttkhdti" value="Yes" />
          <label htmlFor="email" className="min-w-0 flex-1 flex items-center px-3 md:px-4 py-4 rounded-l">
            <svg
              className="flex-shrink-0 fill-current text-gray-500 w-4 h-4 mr-2 sm:mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" />
            </svg>
            <input
              id="email"
              className="flex-1 appearance-none bg-transparent placeholder-gray-500 text-gray-700 font-semibold text-base md:text-lg focus:outline-none js-cm-email-input"
              name="cm-otkdihj-otkdihj"
              type="email"
              required
              placeholder="email"
            />
          </label>
          <button
            className="appearance-none text-lg md:text-xl text-white font-semibold bg-purple-500 px-6 md:px-12 rounded-r whitespace-nowrap focus:outline-none hover:bg-purple-400 focus:bg-purple-400 active:bg-purple-400 js-cm-submit-button"
            type="submit"
          >
            Join
          </button>
        </form>
        <script
          type="text/javascript"
          src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"
        ></script>
      </div>
    </>
  )
}

Page.layout = page => <Layout children={page} meta={meta} />

export default Page
