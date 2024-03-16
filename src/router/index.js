import {
    createWebHistory,
    createRouter
} from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
const routes = [{
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/contacts/add", // Đường dẫn mới để thêm liên hệ mới
        name: "contact.add", // Tên mới cho route
        component: () => import("@/views/ContactAdd.vue"), // Sử dụng cùng một component nhưng với mục đích thêm mới
        props: {
            isNewContact: true
        }, // Sử dụng props để đánh dấu là thêm mới
    },
];
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});
export default router;