import { useEffect } from 'react';

export const AdSense = () => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <div className="w-full my-8 flex justify-center overflow-hidden">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-pub-7390706411563630"
        data-ad-slot="4260029340"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};
