
// export async function getWalletAddressFromBlockFrost(policyID, assetName) {

//     //lookup to find wallet
//     const url = `https://cardano-mainnet.blockfrost.io/api/v0/assets/${policyID}${assetName}/addresses`;

//     // Fetch matching address for the asset.
//     const response = await fetch(
//         url,
//         {
//             headers: {
//                 // Your Blockfrost API key
//                 project_id: 'mainnet7OMiGDkh3e3ZATjOMwsb6M61pVS6aOO7',
//                 'Content-Type': 'application/json'
//             }
//         }
//     );
//     var data = await response.json();

//     const [{ address }] = data;
//     return address;
// }

export function getWalletAddressFromBlockFrost(policyID, assetName) {

    const url = `https://cardano-mainnet.blockfrost.io/api/v0/assets/${policyID}${assetName}/addresses`;
    const request = new XMLHttpRequest();

    request.open('GET', url, false);  // `false` makes the request synchronous
    request.setRequestHeader('project_id', 'mainnet7OMiGDkh3e3ZATjOMwsb6M61pVS6aOO7');
    request.send(null);
    if (request.status !== 200) {
      // handle an error here
      return
    }

    const data = JSON.parse(request.responseText);
    const [{ address }] = data;
    return address;
};
