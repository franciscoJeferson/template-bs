import { create } from 'browser-sync'
create().init({
    watch: true,
    server: "./src"
})
