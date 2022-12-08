export default function About() {
  return (
    <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !pt-0">
      <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
        <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
          <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
            <img  className="rounded-full" src="https://avatars.githubusercontent.com/u/1758349?v=4" alt="Antonio Perez"/>
          </div>
          <div>
            <div className="mb-3">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
                About Antonio Perez
              </h3>
            </div>
            <div>
              <p>Aliquam pellentesque orci quis massa interdum consectetur. Morbi semper purus tellus, eget varius mauris efficitur eu. Nunc dui nulla, pretium non dui in, tristique bibendum enim. Quisque ac molestie lacus, eu aliquam nibh</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}