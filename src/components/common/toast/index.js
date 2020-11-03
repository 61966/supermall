import Toast from './Toast'
// console.log(Toast);
const obj={};
obj.install=function(Vue)
{
    const ToastContrustor=Vue.extend(Toast);//创建组件构造器
    const toast=new ToastContrustor;
    toast.$mount(document.createElement('div'));
    document.body.appendChild(toast.$el);
    Vue.prototype.$toast=toast;
}
export default obj;