const Output = ({ response }: any) => {
  return (
    <div className="w-full">
      {response != null ? (
        <div>
          Your Response:
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      ) : (
        <div className="text-center">Waiting for your data...</div>
      )}
    </div>
  );
};

export default Output;
