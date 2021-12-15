import React from "react";

export default function PageDetailDescription() {
  return (
    <main>
      <h4>About the place</h4>
      <p className="text-gray-500 fw-light">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ut quia
        maiores nostrum officia minus error quod corrupti facere deserunt nemo
        fugiat eaque quam numquam obcaecati, nesciunt suscipit, pariatur,
        blanditiis accusantium non temporibus consectetur quas. Possimus ex
        provident facilis pariatur libero dolorem quia ducimus doloremque totam,
        qui, tenetur delectus eum, neque ab animi veniam unde nam architecto cum
        quod maiores nostrum! Officia nisi cum tempore velit blanditiis, minima
        id ipsum illum voluptate fugit! Sint consequatur incidunt officia quos
        necessitatibus optio illum quam aperiam ipsa ea minima asperiores
        expedita harum porro omnis qui doloribus debitis amet hic ab
        reprehenderit, ipsum placeat. Tenetur, nihil esse! Ratione praesentium
        consequuntur corrupti quas illum. Quisquam perferendis odio aliquam
        minima aperiam sit placeat? Ex vero temporibus explicabo atque et
        provident nisi quidem. A eveniet totam, quos et perspiciatis voluptas
        consequatur veritatis consequuntur mollitia ducimus alias modi accusamus
        illo distinctio exercitationem dolores numquam blanditiis quasi eum
        accusantium.
      </p>
      <div className="row" style={{ marginTop: 30 }}>
        <div className="col-3" style={{ marginBottom: 20 }}>
          <img
            src="/images/icon/icon-diningroom.svg"
            alt="Icon 1"
            width={38}
            className="d-block mb-2"
          />
          <span>2</span>&nbsp;
          <span className="text-gray-500 fw-light">dining room</span>
        </div>
      </div>
    </main>
  );
}
