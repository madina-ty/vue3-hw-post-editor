const { createApp, ref } = Vue;

createApp({
    setup() {
        const newPost = ref({
            title: '',
            content: '',
            background: '#ffffff',
            color: '#000000',
        });

        const posts = ref([]);

        const addPost = () => {
            if (newPost.value.title && newPost.value.content) {
                posts.value.push({ ...newPost.value });
                newPost.value.title = '';
                newPost.value.content = '';
                newPost.value.background = '#ffffff';
                newPost.value.color = '#000000';
            } else {
                alert("Please fill in both title and content!");
            }
        };
        return { newPost, posts, addPost };
    }
}).mount('#app');