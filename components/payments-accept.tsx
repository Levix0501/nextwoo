import Image from 'next/image';

const payments = [
  {
    alt: 'paypal',
    src: 'paypal.png',
  },
  {
    alt: 'visa',
    src: 'visa.png',
  },
  {
    alt: 'mastercard',
    src: 'mastercard.png',
  },
  {
    alt: 'american express',
    src: 'american-express.png',
  },
  {
    alt: 'discover',
    src: 'discover.png',
  },
  {
    alt: 'maestro',
    src: 'maestro.png',
  },
  {
    alt: 'diners club',
    src: 'diners-club.png',
  },
  {
    alt: 'jcb',
    src: 'jcb.png',
  },
  {
    alt: 'cb',
    src: 'cb.png',
  },
  {
    alt: 'apple pay',
    src: 'apple-pay.png',
  },
  {
    alt: 'google pay',
    src: 'google-pay.png',
  },
];

const PaymentsAccept = () => {
  return (
    <div className="flex">
      {payments.map(({ alt, src }) => (
        <Image
          key={alt}
          className="mr-2 mb-2"
          src={`/payments/${src}`}
          alt={alt}
          width={42}
          height={28}
        />
      ))}
    </div>
  );
};

export default PaymentsAccept;
