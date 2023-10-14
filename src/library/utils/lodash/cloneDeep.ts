type CloneDeepMap = WeakMap<object, any>;

export default function cloneDeep<T>(value: T, clonesMap: CloneDeepMap = new WeakMap()): T {
  if (typeof value !== 'object' || value === null) {
    // 如果值不是对象或为 null，则直接返回该值
    return value;
  }

  if (Array.isArray(value)) {
    // 如果值是数组，递归克隆数组中的每个元素
    if (clonesMap.has(value)) {
      return clonesMap.get(value);
    }

    const clonedArray: any[] = [];
    clonesMap.set(value, clonedArray);

    value.forEach((item, index) => {
      clonedArray[index] = cloneDeep(item, clonesMap);
    });

    return clonedArray as T;
  }

  if (clonesMap.has(value)) {
    return clonesMap.get(value);
  }

  // 如果值是对象，递归克隆对象的每个属性
  const clonedObject: Record<string, any> = {};
  clonesMap.set(value, clonedObject);

  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      clonedObject[key] = cloneDeep(value[key], clonesMap);
    }
  }

  return clonedObject as T;
}
