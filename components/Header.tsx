import React from 'react';
import '../styles/Header.module.scss'
import '../styles/Header.module.css'

export default function Header(): JSX.Element {
    return <> {
        <div className="logo pt-12 w-full mx-auto" >
            <div className="logo w-full h-full mx-auto hover:bg-pink-200" >
                <a className="m-auto" href = "https://github.com/kevsaj" target = "_blank" rel = "noopener noreferrer">
                <svg id="name" className="p-4 mx-auto" width = "819" height = "158" viewBox = "0 0 819 158" xmlns = "http://www.w3.org/2000/svg" >
                    <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x = "0.525513" y = "0.415985" width = "818" height = "158" >
                        <path d="M59.9575 115L18.6295 69.208V115H5.52551V14.632H18.6295V61.144L60.1015 14.632H76.6615L31.1575 64.888L77.0935 115H59.9575Z" stroke = "white" strokeWidth = "5" mask = "url(#path-1-outside-1)" />
                        <path d="M163.729 72.52C163.729 75.016 163.585 77.656 163.297 80.44H100.225C100.705 88.216 103.345 94.312 108.145 98.728C113.041 103.048 118.945 105.208 125.857 105.208C131.521 105.208 136.225 103.912 139.969 101.32C143.809 98.632 146.497 95.08 148.033 90.664H162.145C160.033 98.248 155.809 104.44 149.473 109.24C143.137 113.944 135.265 116.296 125.857 116.296C118.369 116.296 111.649 114.616 105.697 111.256C99.8406 107.896 95.2326 103.144 91.8726 97C88.5126 90.76 86.8326 83.56 86.8326 75.4C86.8326 67.24 88.4646 60.088 91.7286 53.944C94.9926 47.8 99.5526 43.096 105.409 39.832C111.361 36.472 118.177 34.792 125.857 34.792C133.345 34.792 139.969 36.424 145.729 39.688C151.489 42.952 155.905 47.464 158.977 53.224C162.145 58.888 163.729 65.32 163.729 72.52ZM150.193 69.784C150.193 64.792 149.089 60.52 146.881 56.968C144.673 53.32 141.649 50.584 137.809 48.76C134.065 46.84 129.889 45.88 125.281 45.88C118.657 45.88 112.993 47.992 108.289 52.216C103.681 56.44 101.041 62.296 100.369 69.784H150.193Z" stroke = "white" strokeWidth = "5" mask = "url(#path-1-outside-1)" />
                        <path d="M210.402 102.904L234.882 36.088H248.85L217.89 115H202.626L171.666 36.088H185.778L210.402 102.904Z" stroke = "white" strokeWidth = "5" mask = "url(#path-1-outside-1)" />
                        <path d="M268.512 23.272C266.016 23.272 263.904 22.408 262.176 20.68C260.448 18.952 259.584 16.84 259.584 14.344C259.584 11.848 260.448 9.73599 262.176 8.00799C263.904 6.27999 266.016 5.41599 268.512 5.41599C270.912 5.41599 272.928 6.27999 274.56 8.00799C276.288 9.73599 277.152 11.848 277.152 14.344C277.152 16.84 276.288 18.952 274.56 20.68C272.928 22.408 270.912 23.272 268.512 23.272ZM274.848 36.088V115H261.744V36.088H274.848Z" stroke = "white" strokeWidth = "5" mask = "url(#path-1-outside-1)" />
                        <path d="M335.63 34.648C345.23 34.648 353.006 37.576 358.958 43.432C364.91 49.192 367.886 57.544 367.886 68.488V115H354.926V70.36C354.926 62.488 352.958 56.488 349.022 52.36C345.086 48.136 339.71 46.024 332.894 46.024C325.982 46.024 320.462 48.184 316.334 52.504C312.302 56.824 310.286 63.112 310.286 71.368V115H297.182V36.088H310.286V47.32C312.878 43.288 316.382 40.168 320.798 37.96C325.31 35.752 330.254 34.648 335.63 34.648Z" stroke = "white" strokeWidth = "5" mask = "url(#path-1-outside-1)" />
                        <path d="M459.506 116.008C452.882 116.008 446.93 114.856 441.65 112.552C436.466 110.152 432.386 106.888 429.41 102.76C426.434 98.536 424.898 93.688 424.802 88.216H438.77C439.25 92.92 441.17 96.904 444.53 100.168C447.986 103.336 452.978 104.92 459.506 104.92C465.746 104.92 470.642 103.384 474.194 100.312C477.842 97.144 479.666 93.112 479.666 88.216C479.666 84.376 478.61 81.256 476.498 78.856C474.386 76.456 471.746 74.632 468.578 73.384C465.41 72.136 461.138 70.792 455.762 69.352C449.138 67.624 443.81 65.896 439.778 64.168C435.842 62.44 432.434 59.752 429.554 56.104C426.77 52.36 425.378 47.368 425.378 41.128C425.378 35.656 426.77 30.808 429.554 26.584C432.338 22.36 436.226 19.096 441.218 16.792C446.306 14.488 452.114 13.336 458.642 13.336C468.05 13.336 475.73 15.688 481.682 20.392C487.73 25.096 491.138 31.336 491.906 39.112H477.506C477.026 35.272 475.01 31.912 471.458 29.032C467.906 26.056 463.202 24.568 457.346 24.568C451.874 24.568 447.41 26.008 443.954 28.888C440.498 31.672 438.77 35.608 438.77 40.696C438.77 44.344 439.778 47.32 441.794 49.624C443.906 51.928 446.45 53.704 449.426 54.952C452.498 56.104 456.77 57.448 462.242 58.984C468.866 60.808 474.194 62.632 478.226 64.456C482.258 66.184 485.714 68.92 488.594 72.664C491.474 76.312 492.914 81.304 492.914 87.64C492.914 92.536 491.618 97.144 489.026 101.464C486.434 105.784 482.594 109.288 477.506 111.976C472.418 114.664 466.418 116.008 459.506 116.008Z" stroke = "white" strokeWidth = "5" mask = "url(#path-1-outside-1)" />
                        <path d="M507.301 75.256C507.301 67.192 508.933 60.136 512.197 54.088C515.461 47.944 519.925 43.192 525.589 39.832C531.349 36.472 537.733 34.792 544.741 34.792C551.653 34.792 557.653 36.28 562.741 39.256C567.829 42.232 571.621 45.976 574.117 50.488V36.088H587.365V115H574.117V100.312C571.525 104.92 567.637 108.76 562.453 111.832C557.365 114.808 551.413 116.296 544.597 116.296C537.589 116.296 531.253 114.568 525.589 111.112C519.925 107.656 515.461 102.808 512.197 96.568C508.933 90.328 507.301 83.224 507.301 75.256ZM574.117 75.4C574.117 69.448 572.917 64.264 570.517 59.848C568.117 55.432 564.853 52.072 560.725 49.768C556.693 47.368 552.229 46.168 547.333 46.168C542.437 46.168 537.973 47.32 533.941 49.624C529.909 51.928 526.693 55.288 524.293 59.704C521.893 64.12 520.693 69.304 520.693 75.256C520.693 81.304 521.893 86.584 524.293 91.096C526.693 95.512 529.909 98.92 533.941 101.32C537.973 103.624 542.437 104.776 547.333 104.776C552.229 104.776 556.693 103.624 560.725 101.32C564.853 98.92 568.117 95.512 570.517 91.096C572.917 86.584 574.117 81.352 574.117 75.4Z" stroke = "white" strokeWidth = "5" mask = "url(#path-1-outside-1)" />
                        <path d="M616.566 23.272C614.07 23.272 611.958 22.408 610.23 20.68C608.598 18.952 607.782 16.84 607.782 14.344C607.782 11.848 608.598 9.73599 610.23 8.00799C611.958 6.27999 614.07 5.41599 616.566 5.41599C619.062 5.41599 621.126 6.27999 622.758 8.00799C624.486 9.73599 625.35 11.848 625.35 14.344C625.35 16.84 624.486 18.952 622.758 20.68C621.126 22.408 619.062 23.272 616.566 23.272ZM623.046 132.136C623.046 139.144 621.27 144.28 617.718 147.544C614.166 150.808 608.982 152.44 602.166 152.44H594.534V141.352H600.006C603.654 141.352 606.198 140.632 607.638 139.192C609.174 137.752 609.942 135.304 609.942 131.848V36.088H623.046V132.136Z" stroke = "white" strokeWidth = "5" mask = "url(#path-1-outside-1)" />
                        <path d="M640.333 75.256C640.333 67.192 641.965 60.136 645.229 54.088C648.493 47.944 652.957 43.192 658.621 39.832C664.381 36.472 670.765 34.792 677.773 34.792C684.685 34.792 690.685 36.28 695.773 39.256C700.861 42.232 704.653 45.976 707.149 50.488V36.088H720.397V115H707.149V100.312C704.557 104.92 700.669 108.76 695.485 111.832C690.397 114.808 684.445 116.296 677.629 116.296C670.621 116.296 664.285 114.568 658.621 111.112C652.957 107.656 648.493 102.808 645.229 96.568C641.965 90.328 640.333 83.224 640.333 75.256ZM707.149 75.4C707.149 69.448 705.949 64.264 703.549 59.848C701.149 55.432 697.885 52.072 693.757 49.768C689.725 47.368 685.261 46.168 680.365 46.168C675.469 46.168 671.005 47.32 666.973 49.624C662.941 51.928 659.725 55.288 657.325 59.704C654.925 64.12 653.725 69.304 653.725 75.256C653.725 81.304 654.925 86.584 657.325 91.096C659.725 95.512 662.941 98.92 666.973 101.32C671.005 103.624 675.469 104.776 680.365 104.776C685.261 104.776 689.725 103.624 693.757 101.32C697.885 98.92 701.149 95.512 703.549 91.096C705.949 86.584 707.149 81.352 707.149 75.4Z" stroke = "white" strokeWidth = "5" mask = "url(#path-1-outside-1)" />
                        <path d="M780.989 34.648C790.589 34.648 798.365 37.576 804.317 43.432C810.269 49.192 813.245 57.544 813.245 68.488V115H800.285V70.36C800.285 62.488 798.317 56.488 794.381 52.36C790.445 48.136 785.069 46.024 778.253 46.024C771.341 46.024 765.821 48.184 761.693 52.504C757.661 56.824 755.645 63.112 755.645 71.368V115H742.541V36.088H755.645V47.32C758.237 43.288 761.741 40.168 766.157 37.96C770.669 35.752 775.613 34.648 780.989 34.648Z" stroke = "white" strokeWidth = "5" mask = "url(#path-1-outside-1)" />
                    </mask>
                        < path d="M59.9575 115L18.6295 69.208V115H5.52551V14.632H18.6295V61.144L60.1015 14.632H76.6615L31.1575 64.888L77.0935 115H59.9575Z" stroke = "white" strokeWidth = "10" mask = "url(#path-1-outside-1)" />
                        <path d="M163.729 72.52C163.729 75.016 163.585 77.656 163.297 80.44H100.225C100.705 88.216 103.345 94.312 108.145 98.728C113.041 103.048 118.945 105.208 125.857 105.208C131.521 105.208 136.225 103.912 139.969 101.32C143.809 98.632 146.497 95.08 148.033 90.664H162.145C160.033 98.248 155.809 104.44 149.473 109.24C143.137 113.944 135.265 116.296 125.857 116.296C118.369 116.296 111.649 114.616 105.697 111.256C99.8406 107.896 95.2326 103.144 91.8726 97C88.5126 90.76 86.8326 83.56 86.8326 75.4C86.8326 67.24 88.4646 60.088 91.7286 53.944C94.9926 47.8 99.5526 43.096 105.409 39.832C111.361 36.472 118.177 34.792 125.857 34.792C133.345 34.792 139.969 36.424 145.729 39.688C151.489 42.952 155.905 47.464 158.977 53.224C162.145 58.888 163.729 65.32 163.729 72.52ZM150.193 69.784C150.193 64.792 149.089 60.52 146.881 56.968C144.673 53.32 141.649 50.584 137.809 48.76C134.065 46.84 129.889 45.88 125.281 45.88C118.657 45.88 112.993 47.992 108.289 52.216C103.681 56.44 101.041 62.296 100.369 69.784H150.193Z" stroke = "white" strokeWidth = "10" mask = "url(#path-1-outside-1)" />
                        <path d="M210.402 102.904L234.882 36.088H248.85L217.89 115H202.626L171.666 36.088H185.778L210.402 102.904Z" stroke = "white" strokeWidth = "10" mask = "url(#path-1-outside-1)" />
                        <path d="M268.512 23.272C266.016 23.272 263.904 22.408 262.176 20.68C260.448 18.952 259.584 16.84 259.584 14.344C259.584 11.848 260.448 9.73599 262.176 8.00799C263.904 6.27999 266.016 5.41599 268.512 5.41599C270.912 5.41599 272.928 6.27999 274.56 8.00799C276.288 9.73599 277.152 11.848 277.152 14.344C277.152 16.84 276.288 18.952 274.56 20.68C272.928 22.408 270.912 23.272 268.512 23.272ZM274.848 36.088V115H261.744V36.088H274.848Z" stroke = "white" strokeWidth = "10" mask = "url(#path-1-outside-1)" />
                        <path d="M335.63 34.648C345.23 34.648 353.006 37.576 358.958 43.432C364.91 49.192 367.886 57.544 367.886 68.488V115H354.926V70.36C354.926 62.488 352.958 56.488 349.022 52.36C345.086 48.136 339.71 46.024 332.894 46.024C325.982 46.024 320.462 48.184 316.334 52.504C312.302 56.824 310.286 63.112 310.286 71.368V115H297.182V36.088H310.286V47.32C312.878 43.288 316.382 40.168 320.798 37.96C325.31 35.752 330.254 34.648 335.63 34.648Z" stroke = "white" strokeWidth = "10" mask = "url(#path-1-outside-1)" />
                        <path d="M459.506 116.008C452.882 116.008 446.93 114.856 441.65 112.552C436.466 110.152 432.386 106.888 429.41 102.76C426.434 98.536 424.898 93.688 424.802 88.216H438.77C439.25 92.92 441.17 96.904 444.53 100.168C447.986 103.336 452.978 104.92 459.506 104.92C465.746 104.92 470.642 103.384 474.194 100.312C477.842 97.144 479.666 93.112 479.666 88.216C479.666 84.376 478.61 81.256 476.498 78.856C474.386 76.456 471.746 74.632 468.578 73.384C465.41 72.136 461.138 70.792 455.762 69.352C449.138 67.624 443.81 65.896 439.778 64.168C435.842 62.44 432.434 59.752 429.554 56.104C426.77 52.36 425.378 47.368 425.378 41.128C425.378 35.656 426.77 30.808 429.554 26.584C432.338 22.36 436.226 19.096 441.218 16.792C446.306 14.488 452.114 13.336 458.642 13.336C468.05 13.336 475.73 15.688 481.682 20.392C487.73 25.096 491.138 31.336 491.906 39.112H477.506C477.026 35.272 475.01 31.912 471.458 29.032C467.906 26.056 463.202 24.568 457.346 24.568C451.874 24.568 447.41 26.008 443.954 28.888C440.498 31.672 438.77 35.608 438.77 40.696C438.77 44.344 439.778 47.32 441.794 49.624C443.906 51.928 446.45 53.704 449.426 54.952C452.498 56.104 456.77 57.448 462.242 58.984C468.866 60.808 474.194 62.632 478.226 64.456C482.258 66.184 485.714 68.92 488.594 72.664C491.474 76.312 492.914 81.304 492.914 87.64C492.914 92.536 491.618 97.144 489.026 101.464C486.434 105.784 482.594 109.288 477.506 111.976C472.418 114.664 466.418 116.008 459.506 116.008Z" stroke = "white" strokeWidth = "10" mask = "url(#path-1-outside-1)" />
                        <path d="M507.301 75.256C507.301 67.192 508.933 60.136 512.197 54.088C515.461 47.944 519.925 43.192 525.589 39.832C531.349 36.472 537.733 34.792 544.741 34.792C551.653 34.792 557.653 36.28 562.741 39.256C567.829 42.232 571.621 45.976 574.117 50.488V36.088H587.365V115H574.117V100.312C571.525 104.92 567.637 108.76 562.453 111.832C557.365 114.808 551.413 116.296 544.597 116.296C537.589 116.296 531.253 114.568 525.589 111.112C519.925 107.656 515.461 102.808 512.197 96.568C508.933 90.328 507.301 83.224 507.301 75.256ZM574.117 75.4C574.117 69.448 572.917 64.264 570.517 59.848C568.117 55.432 564.853 52.072 560.725 49.768C556.693 47.368 552.229 46.168 547.333 46.168C542.437 46.168 537.973 47.32 533.941 49.624C529.909 51.928 526.693 55.288 524.293 59.704C521.893 64.12 520.693 69.304 520.693 75.256C520.693 81.304 521.893 86.584 524.293 91.096C526.693 95.512 529.909 98.92 533.941 101.32C537.973 103.624 542.437 104.776 547.333 104.776C552.229 104.776 556.693 103.624 560.725 101.32C564.853 98.92 568.117 95.512 570.517 91.096C572.917 86.584 574.117 81.352 574.117 75.4Z" stroke = "white" strokeWidth = "10" mask = "url(#path-1-outside-1)" />
                        <path d="M616.566 23.272C614.07 23.272 611.958 22.408 610.23 20.68C608.598 18.952 607.782 16.84 607.782 14.344C607.782 11.848 608.598 9.73599 610.23 8.00799C611.958 6.27999 614.07 5.41599 616.566 5.41599C619.062 5.41599 621.126 6.27999 622.758 8.00799C624.486 9.73599 625.35 11.848 625.35 14.344C625.35 16.84 624.486 18.952 622.758 20.68C621.126 22.408 619.062 23.272 616.566 23.272ZM623.046 132.136C623.046 139.144 621.27 144.28 617.718 147.544C614.166 150.808 608.982 152.44 602.166 152.44H594.534V141.352H600.006C603.654 141.352 606.198 140.632 607.638 139.192C609.174 137.752 609.942 135.304 609.942 131.848V36.088H623.046V132.136Z" stroke = "white" strokeWidth = "10" mask = "url(#path-1-outside-1)" />
                        <path d="M640.333 75.256C640.333 67.192 641.965 60.136 645.229 54.088C648.493 47.944 652.957 43.192 658.621 39.832C664.381 36.472 670.765 34.792 677.773 34.792C684.685 34.792 690.685 36.28 695.773 39.256C700.861 42.232 704.653 45.976 707.149 50.488V36.088H720.397V115H707.149V100.312C704.557 104.92 700.669 108.76 695.485 111.832C690.397 114.808 684.445 116.296 677.629 116.296C670.621 116.296 664.285 114.568 658.621 111.112C652.957 107.656 648.493 102.808 645.229 96.568C641.965 90.328 640.333 83.224 640.333 75.256ZM707.149 75.4C707.149 69.448 705.949 64.264 703.549 59.848C701.149 55.432 697.885 52.072 693.757 49.768C689.725 47.368 685.261 46.168 680.365 46.168C675.469 46.168 671.005 47.32 666.973 49.624C662.941 51.928 659.725 55.288 657.325 59.704C654.925 64.12 653.725 69.304 653.725 75.256C653.725 81.304 654.925 86.584 657.325 91.096C659.725 95.512 662.941 98.92 666.973 101.32C671.005 103.624 675.469 104.776 680.365 104.776C685.261 104.776 689.725 103.624 693.757 101.32C697.885 98.92 701.149 95.512 703.549 91.096C705.949 86.584 707.149 81.352 707.149 75.4Z" stroke = "white" strokeWidth = "10" mask = "url(#path-1-outside-1)" />
                        <path d="M780.989 34.648C790.589 34.648 798.365 37.576 804.317 43.432C810.269 49.192 813.245 57.544 813.245 68.488V115H800.285V70.36C800.285 62.488 798.317 56.488 794.381 52.36C790.445 48.136 785.069 46.024 778.253 46.024C771.341 46.024 765.821 48.184 761.693 52.504C757.661 56.824 755.645 63.112 755.645 71.368V115H742.541V36.088H755.645V47.32C758.237 43.288 761.741 40.168 766.157 37.96C770.669 35.752 775.613 34.648 780.989 34.648Z" stroke = "white" strokeWidth = "10" mask = "url(#path-1-outside-1)" />
                    </svg>
                </a>
            </div>
        </div>

    } </>
}