import { Link } from '@tanstack/react-router'

import ClerkHeader from '../integrations/clerk/header-user'

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link to="/" search={{ page: 1, filter: "active" }}>
            Home
          </Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/clerk" search={{ page: 1, filter: "active" }}>
            Clerk
          </Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/convex" search={{ page: 1, filter: "active" }}>
            Convex
          </Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/form/simple" search={{ page: 1, filter: "active" }}>
            Simple Form
          </Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/form/address" search={{ page: 1, filter: "active" }}>
            Address Form
          </Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/store" search={{ page: 1, filter: "active" }}>
            Store
          </Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/table" search={{ page: 1, filter: "active" }}>
            TanStack Table
          </Link>
        </div>

        <div className="px-2 font-bold">
          <Link
            to="/demo/tanstack-query"
            search={{ page: 1, filter: "active" }}
          >
            TanStack Query
          </Link>
        </div>
      </nav>

      <div>
        <ClerkHeader />
      </div>
    </header>
  );
}
