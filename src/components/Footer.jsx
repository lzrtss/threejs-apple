import { footerLinks } from 'constants';

const Footer = () => {
  return (
    <footer className="py-8 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className="">
          <p className="font-light text-gray text-xs">
            More ways to shop:{' '}
            <span className="underline text-blue cursor-pointer">
              Find an Apple Store
            </span>{' '}
            or{' '}
            <span className="underline text-blue cursor-pointer">
              other retailer
            </span>{' '}
            near you. Or call 1-800-MY-APPLE
          </p>
        </div>

        <div className="my-8 w-full h-[1px] bg-neutral-700" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-light text-gray text-xs">
            Copyright &copy; {new Date().getFullYear()} Apple Inc. All rights
            reserved.
          </p>

          <ul className="flex">
            {footerLinks.map((link, i) => (
              <li
                key={link}
                className="font-light text-gray text-xs cursor-pointer"
              >
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
