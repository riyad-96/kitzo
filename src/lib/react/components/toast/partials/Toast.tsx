import { pauseToast, resumeToast } from '../helpers/manageToasts/timers';
import toast from '../helpers/triggerToasts';
import type { Positions, Toast } from '../types';
import { ErrorSvg, InfoSvg, LoadingSvg, SuccessSvg, WarningSvg } from './Svgs';
import { useToasterContext } from '../context/ToasterContext';

type ToastProps = {
  t: Toast;
  position: Positions;
  shouldAnimateTransformOrigin: boolean;
  swipeToClose: boolean;
};

export default function ToastContent({
  t,
  position,
  shouldAnimateTransformOrigin,
  swipeToClose,
}: ToastProps) {
  const { setToasts, pauseOnHover } = useToasterContext();
  const { id, type, action, content, status, showIcon, icon, isPromise } = t;

  const iconMap = {
    loading: <LoadingSvg />,
    success: <SuccessSvg />,
    warning: <WarningSvg />,
    error: <ErrorSvg />,
    info: <InfoSvg />,
    default: null,
    custom: null,
  };

  return (
    <div
      id={id}
      style={{
        pointerEvents: 'all',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        whiteSpace: 'pre-wrap',
      }}
      data-action={action}
      data-status={status}
      data-type={type}
      data-position={position}
      data-screen-x={position.split('-')[1]}
      data-screen-y={position.split('-')[0]}
      data-exit={'auto'}
      data-is-promise={isPromise}
      data-swipeable={swipeToClose}
      data-animate-transform-origin={shouldAnimateTransformOrigin}
      className={`kitzo-toast ${shouldAnimateTransformOrigin ? `transform-origin-${position}` : ''}`}
      onPointerEnter={() => pauseOnHover && pauseToast(id)}
      onPointerLeave={() => pauseOnHover && resumeToast(id, setToasts)}
      onMouseEnter={() => pauseOnHover && pauseToast(id)}
      onMouseLeave={() => pauseOnHover && resumeToast(id, setToasts)}
    >
      {showIcon && (
        <>
          {!icon ? (
            <>
              {iconMap[type] && (
                <div style={{ flexShrink: 0 }} className="svg-container">
                  {iconMap[type]}
                </div>
              )}
            </>
          ) : (
            <>
              {typeof icon === 'string' || typeof icon === 'number' ? (
                <div
                  style={{
                    flexShrink: 0,
                  }}
                  className="svg-container"
                >
                  {icon}
                </div>
              ) : (
                <>{icon}</>
              )}
            </>
          )}
        </>
      )}

      <div
        style={{
          flex: 1,
        }}
      >
        {typeof content === 'function'
          ? content(() => toast.dismiss(id))
          : content}
      </div>
    </div>
  );
}
