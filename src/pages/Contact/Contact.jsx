export default function Contact() {
    return (
        <div>
            <section className="bg-white mx-32 rounded-2xl -mt-48">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    
    <form action="#" className="space-y-8">
      <div>
        <label htmlFor="email" className="block mb-2 text-md font-medium text-purple-900 ">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          className=" outline-none shadow-sm bg-purple-50 border border-purple-300 text-purple-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2 text-md font-medium text-purple-900 ">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className=" outline-none block p-3 w-full text-md text-purple-900 bg-purple-50 rounded-lg border border-purple-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
          placeholder="Let us know how we can help you"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block mb-2 text-md font-medium text-purple-900 ">
          Your message
        </label>
        <textarea
          id="message"
          rows="6"
          className="block p-2.5 w-full text-md text-purple-900 bg-purple-50 rounded-lg shadow-sm border border-purple-300 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="py-3 px-5 text-md font-medium text-center text-white bg-purple-500 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
      >
        Send message
      </button>
    </form>
  </div>
</section>

        </div>
    );
}
