import Image from 'next/image';

const payments = [
  'paypal',
  'visa',
  'mastercard',
  'american-express',
  'discover',
  'maestro',
  'diners-club',
  'jcb',
  'cb',
  'apple-pay',
  'google-pay',
];

const PaymentsAccept = () => {
  return (
    <div className="flex flex-wrap">
      {payments.map((name) => (
        <Image
          key={name}
          className="mr-2 mb-2"
          src={`/payments/${name}.png`}
          alt={name}
          width={42}
          height={28}
        />
      ))}
    </div>
  );
};

export default PaymentsAccept;
