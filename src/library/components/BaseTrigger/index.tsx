import React, {
  forwardRef,
  memo,
  useState,
  useImperativeHandle,
  ReactNode,
  ReactElement,
} from "react";
import Trigger from "rc-trigger";

// 定义 BaseTrigger 组件的 props 类型
interface BaseTriggerProps {
  trigger?: any[];
  children: ReactElement<any, string | React.JSXElementConstructor<any>>;
  content: ReactNode | ((props: TriggerContentProps) => ReactElement);
  onBeforePopupChange?: () => boolean;
  // 其他 props
}

// 定义 content 函数组件的 props 类型
interface TriggerContentProps {
  visible: boolean;
  onVisible: (val: boolean) => void;
  onCancel: (val: boolean) => void;
}

const BaseTrigger = (
  {
    trigger = ["click"],
    children,
    content,
    onBeforePopupChange,
    ...others
  }: BaseTriggerProps,
  ref: React.Ref<any>
) => {
  // 使用 useState 来管理组件内部的状态
  const [visible, setVisible] = useState<boolean>(false);

  // 使用 useImperativeHandle 来向父组件提供 onClose 方法
  useImperativeHandle(ref, () => ({
    onClose: () => setVisible(false),
  }));

  // 处理显示状态的函数
  const handleVisible = (val: boolean) => {
    setVisible(val);
  };

  // 处理弹窗显示状态变化的函数
  const handlePopupVisibleChange = (val: boolean) => {
    if (onBeforePopupChange && !onBeforePopupChange()) {
      // 增加打开弹窗前校验, 校验返回 false ，不打开弹窗
      return;
    }
    handleVisible(val);
  };

  return (
    // 使用 rc-trigger 组件来实现触发弹窗功能
    <Trigger
      action={trigger}
      popup={
        visible &&
        (typeof content === "function"
          ? content({
            visible: visible,
            onVisible: handleVisible,
            onCancel: handleVisible,
          })
          : React.cloneElement(content as ReactElement, {
              visible: visible,
              onVisible: handleVisible,
              onCancel: handleVisible,
            }))
      }
      mask
      maskClosable={false}
      popupVisible={visible}
      onPopupVisibleChange={handlePopupVisibleChange}
      {...others}
    >
      {children}
    </Trigger>
  );
};

export default memo(forwardRef(BaseTrigger));
