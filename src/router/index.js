import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [{
        path: '/',
        redirect: '/company'
    },
    // 政策不一样
    {
        path: '/policy',
        name: 'Policy',
        component: () =>
            import ('@/views/policy/index'),
        meta: {
            title: '政策不一样',
            index: 1
        }
    },
    // 服务不一样
    {
        path: '/service',
        name: 'Service',
        component: () =>
            import ('@/views/service/index'),
        meta: {
            title: '服务不一样',
            index: 1
        }
    },
    // 价值不一样
    {
        path: '/worth',
        name: 'Worth',
        component: () =>
            import ('@/views/worth/index'),
        meta: {
            title: '价值不一样',
            index: 1
        }
    },
    // 公司不一样
    {
        path: '/company',
        name: 'Company',
        component: () =>
            import ('@/views/company/index'),
        meta: {
            title: '公司不一样',
            index: 1
        }
    },
    // 优异资质
    {
        path: '/yyzz',
        name: 'YYZZ',
        component: () =>
            import ('@/views/yyzz/index'),
        meta: {
            title: '优异资质',
            index: 2
        }
    },
    // 服务品质
    {
        path: '/fwpz',
        name: 'FWPZ',
        component: () =>
            import ('@/views/fwpz/index'),
        meta: {
            title: '服务品牌',
            index: 2
        }
    },
    // 使命任务
    {
        path: '/smrw',
        name: 'SMRW',
        component: () =>
            import ('@/views/smrw/index'),
        meta: {
            title: '使命任务',
            index: 2
        }
    },

    // 服务详情
    {
        path: '/detail',
        name: 'DETAIL',
        component: () =>
            import ('@/views/detail/index'),
        meta: {
            title: '服务详情',
            index: 2
        }
    },

    // 车管家服务
    {
        path: '/cgjfw',
        name: 'CGJFW',
        component: () =>
            import ('@/views/cgjfw/index'),
        meta: {
            title: '服务详情',
            index: 2
        }
    },

    // 服务详情
    {
        path: '/spzlfw',
        name: 'SPZLFW',
        component: () =>
            import ('@/views/spzlfw/index'),
        meta: {
            title: '服务详情',
            index: 2
        }
    },
]

export default new Router({
    routes: constantRouterMap
})
