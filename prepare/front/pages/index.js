import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostFrom from '../components/PostForm';

const Home = () => {
    const { isLoggedIn } = useSelector((state) => state.user);    
    const { mainPosts } = useSelector((state) => state.post);
    return (
        <AppLayout>            
            {isLoggedIn && <PostFrom />}
            {mainPosts.map((post)=> {
                return (
                    <PostCard key={post.id} post={post} />
                );
            })}
        </AppLayout>
    );
}

export default Home;