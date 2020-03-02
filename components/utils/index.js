export function customExtendFunComponent(o, _proto_) {
  const proto = Object.create(_proto_)
  Object.setPrototypeOf(o, proto)
}

export function customExtendClassComponent(o, _proto_) {
  const proto = Object.create(_proto_)

  for (let k in proto) {
    o[k] = proto[k]
  }
}
