/* import Home from "@/views/Home";
import About from '@/views/About'
import Message from '@/views/Message'
import Project from '@/views/Project'
import Blog from '@/views/Blog'
import BlogDetail from '@/views/Blog/BlogDetail'
 */
import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";

configure({
    trickleSpeed: 20,
    showSpinner: false,
});

function getComponent(pageCompResolver) {
    return async () => {
        start();
        const comp = await pageCompResolver();
        done();
        return comp
    }
}


export default [
    {
        path: "/",
        component: getComponent(() => import(/* webpackChunkName:"Home" */"@/views/Home")),
        name: "Home",
        meta: {
            title: "首页"
        }
    },
    {
        path: "/blog",
        component: getComponent(() => import(/*webpackChunkName:"Blog"*/"@/views/Blog")),
        name: "Blog",
        meta: {
            title: "文章"
        }
    },
    {
        name: "CategoryBlog",
        path: "/blog/cate/:categoryid",
        component: getComponent(() => import(/*webpackChunkName:"CategoryBlog"*/"@/views/Blog")),
        meta: {
            title: "文章"
        }
    },
    {
        name: "BlogDetail",
        path: "/blog/:blogId",
        component: getComponent(() => import(/*webpackChunkName:"BlogDetail"*/"@/views/Blog/BlogDetail")),
        meta: {
            title: "文章"
        }
    },
    {
        path: "/message",
        component: getComponent(() => import(/*webpackChunkName:"Message"*/"@/views/Message")),
        name: "Message",
        meta: {
            title: "留言板"
        }
    },
    {
        path: "/about",
        component: getComponent(() => import(/*webpackChunkName:"About"*/"@/views/About")),
        name: "About",
        meta: {
            title: "关于我"
        }
    },
    {
        path: "/project",
        component: getComponent(() => import(/*webpackChunkName:"Project"*/"@/views/Project")),
        name: "Project",
        meta: {
            title: "项目"
        }
    }
]
