import type {Proxy} from './util/model';

export let PORT = 377; // 端口

export let PROXY_CODE_SECRET = 'Easy-Reverse-Proxy'; // 代理码密钥
// 代理
export let PROXIES: Proxy[] = [{
        domain: "github.xcxx.me",
        url: "https://github.com/",
        enable: true
    }
                             {
        domain: "easy-reverse-proxy0.vercel.app",
        url: "https://google.com/",
        enable: true
    }     ];
