export default function (data = []) {
    return {
        data() {
            return {
                isLoading: true,
                data
            }
        },
        created() {
            this.fetchData().then(data => {
                this.data = data;
                this.isLoading = false;
            })
        }
    }
}