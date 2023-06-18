import { getUserFromCookie, User } from "@/lib/auth";
import { cookies } from "next/headers";
import Button from "./Button";
import Card from "./Card";
import { delay } from "@/lib/async";

const getData = async (): Promise<User> => {
  await delay(5000);
  const user = await getUserFromCookie(cookies());
  return user;
};

const Greetings = async (): Promise<JSX.Element> => {
  try {
    const user = await getData();

    return (
      <Card className="w-full py-4 relative">
        <div className="mb-4">
          <h1 className="text-3xl text-gray-700 font-bold mb-4">
            Merhaba, {user.firstName}!
          </h1>
          <h4 className="text-xl text-gray-400">
            Günlük görevlerinizi ve programınızı kontrol edin
          </h4>
        </div>
        <div>
          <Button size="large">Bugünkü Program</Button>
        </div>
      </Card>
    );
  } catch (error) {
    // Hata durumunda ne yapılacağını belirleyin
    return (
      <Card className="w-full py-4 relative">
        <div className="mb-4">
          <h1 className="text-3xl text-gray-700 font-bold mb-4">
          User not found!
          </h1>
          <h4 className="text-xl text-gray-400">
          Please login or create an account.
          </h4>
        </div>
      </Card>
    );
  }
};

export default Greetings;