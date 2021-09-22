import styled from 'styled-components';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import { useState } from 'react';
import { Wrapper } from '../components/Wrapper';
import { useLoginMutation, UserResponse } from '../generated/graphql';
import { useUserStore } from '../lib/user.store';
import { withApollo } from '../lib/withApollo';
import { useRouter } from 'next/router';

const Card = styled.section<{ width?: string }>`
  background-color: #f3f3f3;
  padding: 20px;
  text-align: center;
  width: ${(props) => props.width || '100%'};
  height: 100%;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Label = styled.h4`
  color: #333;
  margin: 10px 0;
`;

const Input = styled.input`
  padding: 6px 10px;
  border: 0.5px solid #ccc;
  border-radius: 3px;
  width: 100%;
  color: #333;

  &:focus {
    border-color: grey;
    outline: 0;
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  margin: 10px 0;
  border: none;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  width: 100%;
  height: 40px;
  outline: none;
  transition: all 0.3s;
  &:hover {
    background-color: #4caf50;
  }
`;

const ErrorMsg = styled.h5`
  color: red;
  margin: 10px 0;
`;

type ErrorMap = Pick<UserResponse, 'errors'>;

const Login = () => {
  const setUser = useUserStore((s) => s.setUser);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [{ errors }, setError] = useState<ErrorMap>({
    errors: [],
  });
  const [loading, setLoading] = useState(false);
  const [login] = useLoginMutation();
  const r = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({ errors: [] });
    setLoading(true);

    if (username.length === 0 || password.length === 0) {
      if (username.length === 0) {
        setError({
          errors: [
            {
              field: 'username',
              message: 'Username is required',
            },
            {
              field: 'password',
              message: 'Password is required',
            },
          ],
        });
      }

      setLoading(false);
      return;
    }
    const { data } = await login({
      variables: {
        password,
        username,
      },
    });

    if (data?.login.errors) {
      setError({ errors: data.login.errors });
    } else {
      setUser(data?.login.user!);
      r.push('/');
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Login | ReadBooks.io</title>
      </Head>
      <Navbar />
      <Container marginTop="100px">
        <Wrapper
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <form onSubmit={handleSubmit}>
            <h1>Login as Existing Customer</h1>

            <Card width="450px">
              <Label>Username</Label>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <ErrorMsg>
                {errors
                  ?.map((e) =>
                    e.field.toLowerCase() === 'username' ? e.message : null
                  )
                  .join(', ')}
              </ErrorMsg>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ErrorMsg>
                {errors
                  ?.map((e) =>
                    e.field.toLowerCase() === 'password' ? e.message : null
                  )
                  .join(', ')}
              </ErrorMsg>
              <Button type="submit" disabled={loading}>
                {loading ? 'loading...' : 'Login!'}
              </Button>
            </Card>
          </form>
        </Wrapper>
      </Container>
    </>
  );
};

export default withApollo({ ssr: false })(Login);
