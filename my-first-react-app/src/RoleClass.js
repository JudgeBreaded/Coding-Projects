 
export const RoleClass = (props) => {
    const { role, subspec, statprio } = props;
    return (
    <>
      <h1>{"Role: " + role}</h1>
      <h2>{"Subspec: " + subspec}</h2>
      <h2>{"Stat Priority: " + statprio}</h2>
    </>
  );
}
export const Mage = {
    role : "Mage",
    subspec: "Fire",
    statprio : "Crit / Mastery",  
}
export const Warrior = {
  role : "Warior",
  subspec: "Arms",
  statprio : "Haste / Crit",
};