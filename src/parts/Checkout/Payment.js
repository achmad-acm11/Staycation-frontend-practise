import React from "react";
import LogoBCA from "assets/images/logo-bca.jpg";
import InputFile from "elements/Form/InputFile";
import InputText from "elements/Form/InputText";

export default function Payment() {
  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-5 border-end py-5" style={{ paddingRight: 80 }}>
          <p className="mb-4">Transfer Pembayaran : </p>
          <p>Tax: 10%</p>
          <p>Sub total: $480 USD</p>
          <p>Total: $580 USD</p>
          <div className="row">
            <div className="col-3 text-end">
              <img src={LogoBCA} alt="Logo BCA" width={60} />
            </div>
            <div className="col">
              <dl>
                <dd>Bank Central Asia</dd>
                <dd>200 2011 111</dd>
                <dd>Buidwith Angga</dd>
              </dl>
            </div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <img src={LogoBCA} alt="Logo BCA" width={60} />
            </div>
            <div className="col">
              <dl>
                <dd>Bank Central Asia</dd>
                <dd>200 2011 111</dd>
                <dd>Buidwith Angga</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
          <label htmlFor="uploadFile">Upload Bukti Transfer</label>
          <InputFile />
          <label htmlFor="bankName">Asal Bank</label>
          <InputText />
          <label htmlFor="bankHolder">Nama Pengirim</label>
          <InputText />
        </div>
      </div>
    </div>
  );
}
