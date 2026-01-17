import { pauseToast, resumeToast } from '../helpers/manageToasts/timers';
import toast from '../helpers/triggerToasts';
import type { Positions, Toast } from '../types';
import { ErrorSvg, InfoSvg, LoadingSvg, SuccessSvg, WarningSvg } from './Svgs';
import { useToasterContext } from '../context/ToasterContext';

type ToastProps = {
  t: Toast;
  position: Positions;
  shouldAnimateTransformOrigin: boolean | undefined;
};

export default function ToastContent({
  t,
  position,
  shouldAnimateTransformOrigin,
}: ToastProps) {
  const { setToasts, pauseOnHover } = useToasterContext();
  const { id, type, action, content, status, showIcon, icon } = t;

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
      id={`toast-id-${id}`}
      style={{
        pointerEvents: 'all',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}
      onMouseEnter={() => pauseOnHover && pauseToast(t.id)}
      onMouseLeave={() => pauseOnHover && resumeToast(t.id, setToasts)}
      className={`kitzo-toast type-${type} action-${action} status-${status} pos-y-${position.split('-')[0]} pos-x-${position.split('-')[1]} ${shouldAnimateTransformOrigin ? `transform-origin-${position}` : ''}`}
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
