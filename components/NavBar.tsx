import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useForm from 'hooks';

type FormData = {
  search: string;
};

const NavBar: React.FC = () => {
  const router = useRouter();
  const { search, handleChange } = useForm<FormData>({ search: '' });

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    router.push({
      pathname: '/search',
      query: { q: search },
    });
  };

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Wannabe Challenge
        </Link>
        <form className="d-flex" role="search">
          <input
            aria-label="Search"
            className="form-control me-2"
            name="search"
            placeholder="Search"
            type="search"
            value={search}
            onChange={(event) => handleChange(event)}
          />
          <button
            className="btn btn-success"
            type="submit"
            onClick={(event) => handleSubmit(event)}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
