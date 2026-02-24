import Child from "./child";

function Parent() {
  return (
    <div>
      <h2>Employee Details</h2>

      <Child name="Rahul" age={25} email="rahul@gmail.com" phone="9876543210" city="Hyderabad" qualification="B.Tech" experience={2} />
      <Child name="Anjali" age={27} email="anjali@gmail.com" phone="9123456780" city="Bangalore" qualification="MCA" experience={3} />
      <Child name="Kiran" age={24} email="kiran@gmail.com" phone="9988776655" city="Chennai" qualification="B.Sc" experience={1} />
      <Child name="Sneha" age={26} email="sneha@gmail.com" phone="9871234560" city="Pune" qualification="MBA" experience={4} />
      <Child name="Arjun" age={28} email="arjun@gmail.com" phone="9012345678" city="Delhi" qualification="B.Com" experience={5} />

    </div>
  );
}

export default Parent;