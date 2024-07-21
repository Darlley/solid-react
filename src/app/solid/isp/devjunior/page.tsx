type ProfileProps = {
  name: string;
  email: string;
};

export default function Profile({ name = '', email = '' }: ProfileProps) {
  return (
    <>
      <h2>{name}</h2>
      <p>{email}</p>
    </>
  );
}
