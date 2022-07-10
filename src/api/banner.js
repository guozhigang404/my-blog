import request from '@/api/request'

export async function getBanner() {
    return await request.get("/api/banner");
}
