import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";

const Blog = () => {
  return (
    <>
      <Meta title={"Blog"} />
      <BreadCrumb title="Blog" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 ">
          {/*  */}
          <div className="lg:col-span-1 bg-white border shadow-xl rounded-lg">
            <ul
              role="list"
              className="p-6 divide-y divide-slate-200 flex flex-col gap-4"
            >
              {[...Array(5)].map((_, index) => (
                <li
                  key={index}
                  className="flex p-4 shadow-lg rounded-lg hover:-translate-y-[10%] transition-all duration-500 bg-slate-50"
                >
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="ml-3 overflow-hidden">
                    <p className="text-sm font-medium text-slate-900">
                      chibaosoaos
                    </p>
                    <p className="text-sm text-slate-500 truncate">
                      lienbasooas
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/*  */}
          <div className="lg:col-span-3 md:col-span-2 p-5 rounded-lg bg-white border shadow-xl">
            <div
              className=" 
              grid grid-cols-2 md:grid-cols-4
              lg:grid-cols-6 xl:grid-cols-6 gap-4 "
            >
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
