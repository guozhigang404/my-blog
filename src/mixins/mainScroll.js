import eventBus from '@/utils/eventBus'
export default function (mainContainer) {
    return {
        methods: {
            handleSetMainScroll(scrollTop) {
                this.$refs[mainContainer].scrollTop = scrollTop;
            },
            handleMainScroll() {
                eventBus.$emit("mainScroll", this.$refs[mainContainer]);
            },
        },
        mounted(){
            this.$refs[mainContainer].addEventListener("scroll", this.handleMainScroll);
            eventBus.$on("setMainScroll", this.handleSetMainScroll)
        },
        beforeDestroy() {
            this.$refs[mainContainer].removeEventListener("scroll", this.handleMainScroll)
            eventBus.$emit("mainScroll")
            eventBus.$off("setMainScroll", this.handleSetMainScroll)
        }
    }
}
