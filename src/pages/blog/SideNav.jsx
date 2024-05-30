import SearchFilter from "./sidenav/SearchFilter"
import RecentPosts from "./sidenav/RecentPosts"
import Categories from "./sidenav/Categories"

const SideNav = ({blogs, onCategorySelect, onSearch}) => {
  return (
    <div className="flex flex-col">
        <SearchFilter onSearch={onSearch} />
        <RecentPosts blogs={blogs}/>
        <Categories blogs={blogs} onCategorySelect={onCategorySelect} />
    </div>
  )
}

export default SideNav