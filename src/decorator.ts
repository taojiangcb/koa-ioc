function server<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    server_name = constructor.name;
  }
}

function post() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let server_name = target.server_name || "";
    let method = "post";
    let path = [method,`/${server_name}/${propertyKey}`];
  }
}